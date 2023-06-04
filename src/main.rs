mod modules;

use modules::answers;
use modules::prompt;
use modules::questions;
use modules::terminal;
use uuid::uuid;

fn main() -> () {
    let is_asking: bool = true;

    let mut current_question_id = uuid!("7d5b561e-3b79-4009-a289-e92de964e35b");

    while is_asking {
        terminal::clear();

        let question = questions::find_by_id(current_question_id).unwrap();
        let answer: u8 = prompt::ask(question.label, question.options);

        let same_directory: bool = {
            if question.id == uuid!("3a71c955-d924-46ca-92b5-16f1f2f80cb1") && answer == 1 {
                true
            } else {
                false
            }
        };

        let selected_option = questions::find_option_by_id(question.id, answer).unwrap();

        current_question_id = selected_option.next_question_id;

        // TODO: Preciso descobrir uma forma de guardar as respostas!
    }
}
