import { prompt } from "enquirer";
import { Library, Admin, User } from "./library";

const library = new Library();
const admin = new Admin("Semilore", "admin@example.com");
const user = new User("Jane", "jane@example.com");

async function mainMenu() {
    console.log("\n📚 Welcome to the Library System");

    while (true) {
        const response = await prompt<{ choice: string }>({
            type: "select",
            name: "choice",
            message: "Choose an option:",
            choices: [
                { name: "view", message: "View Books" },
                { name: "borrow", message: "Borrow a Book" },
                { name: "add", message: "Add a Book (admin only)" },
                { name: "exit", message: "Exit" },
            ],
        });

        switch (response.choice) {
            case "view":
                user.viewBooks(library);
                break;

            case "borrow": {
                const { bookId } = await prompt<{ bookId: number }>({
                    type: "numeral",
                    name: "bookId",
                    message: "Enter Book ID to borrow:",
                    validate: (value: any) =>
                        isNaN(value) ? "Please enter a valid number" : true,
                });
                user.borrowBook(library, bookId);
                break;
            }

            case "add": {
                const answers = await prompt<{ title: string; author: string }>([
                    {
                        type: "input",
                        name: "title",
                        message: "Enter book title:",
                    },
                    {
                        type: "input",
                        name: "author",
                        message: "Enter author:",
                    },
                ]);
                admin.addToLibrary(library, {
                    title: answers.title,
                    author: answers.author,
                });
                break;
            }

            case "exit":
                console.log("Goodbye!");
                process.exit(0);

            default:
                console.log("Invalid option.");
        }
    }
}

mainMenu();
