use crate::modules::choices::Choice;
use std::io::{self, Write};

#[derive(Debug)]
pub struct Prompt {}

impl Prompt {
    pub fn ask(question_label: &str, choices: Vec<&Choice>) -> u8 {
        let mut input: String = String::new();

        println!(
            "
{question_label}
        "
        );

        for choice in choices {
            println!("{}. {}", choice.value, choice.name)
        }

        print!("\nResposta: ");

        let _ = io::stdout().flush();

        io::stdin()
            .read_line(&mut input)
            .expect("Error! Please, try again.");

        let output: u8 = input.trim().parse().expect("Input not an integer");

        return output;
    }
}
