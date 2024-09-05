from flask import Flask, render_template, request
import sqlite3

# connect database and create cursor
db = sqlite3.connect("chinook.db", check_same_thread=False)
c = db.cursor()

def checkQuery(query):
    """
    This function checks if a query entered by a user is potentially destructive for the database.

    Args:
        query: SQLite query entered by the user

    Returns:
        boolean: True if query is safe, false if not.
    """
    queryInCaps = query.strip().upper()

    destructive_operators = ["DROP", "DELETE", "UPDATE", "ALTER", "TRUNCATE", "CREATE"]

    for operator in destructive_operators:
        if queryInCaps.startswith(operator):
            return False
    return True

app = Flask(__name__)

# create home page
@app.route('/')
def index():
    return render_template('index.html')

# create playgroundDB page
@app.route('/playgroundDB', methods = ["GET", "POST"])
def playgrounddb():
    # check if submit button has been pressed and fetch query
    if request.method == "POST":
        query = request.form["query_input"]
        try:
            # check query is safe
            if checkQuery(query) == True:
                c.execute(query)
                results = c.fetchall()
                column_names = [description[0] for description in c.description]
                return render_template("PlaygroundDB.html", query_input=query, results=results, column_names=column_names)
            else:
                return render_template("PlaygroundDB.html", error="Potentially destructive queries are not allowed. You may only use queries which fetch data.")
        # pass error message if there is an error with the query
        except Exception as e:
            return render_template("PlaygroundDB.html", query_input=query, query=query, error=str(e))
    else:
        return render_template("PlaygroundDB.html")

# create how to use page which explains the database
@app.route('/playgroundDB/how-to-use')
def how_to_use():
    return render_template("how-to-use.html")


# run app
if __name__ == "__main__":
    app.run(debug=True)