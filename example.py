todos = [
    {'id': 1, 'title': 'Do laundry', 'completed': False},
    {'id': 2, 'title': 'Buy groceries', 'completed': True},
]


try:
    incomplete_tasks = [todo for todo in todos if not todo['completed']]
    print(incomplete_tasks)

except Exception as err:
    print('Error:', err, type(err))