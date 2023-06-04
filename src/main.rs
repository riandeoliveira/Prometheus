mod modules;

use modules::answers::Answers;
use modules::choices::{Choice, Choices};
use modules::prompt::Prompt;
use modules::questions::{Question, Questions};
use modules::terminal::Terminal;

fn main() -> () {
    let mut answers: Answers = Answers::init();
    let questions: Questions = Questions::init();
    let choices: Choices = Choices::init();

    let is_asking: bool = true;
    let mut same_directory: bool = false;

    let mut current_question_id: &str = "7d5b561e";

    while is_asking {
        Terminal::clear();

        println!("Respostas: {:?}", answers.list);

        let question: &Question = questions.find_by_id(current_question_id).unwrap();
        let question_choices: Vec<&Choice> = choices.find_all_by_question_id(question.id).unwrap();

        let answer: u8 = Prompt::ask(question.label, question_choices);

        let selected_choice: &Choice = choices.find_unique(answer, question.id).unwrap();

        answers.add(selected_choice.clone());

        if selected_choice.value == 1 && selected_choice.question_id == "3a71c955" {
            same_directory = true;
        }

        if current_question_id == "2bb6f34c" {
            if same_directory {
                current_question_id = "1a9bccfa"
            } else {
                current_question_id = selected_choice.next_question_id;
            }
        } else {
            current_question_id = selected_choice.next_question_id;
        }
    }
}
