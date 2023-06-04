use crate::questions::Option;
use std::io::{self, Write};

pub fn ask(question: &str, options: Vec<Option>) -> u8 {
    let mut input: String = String::new();

    println!(
        "
{question}
    "
    );

    for option in options {
        println!("{}. {}", option.id, option.name)
    }

    print!("\nResposta: ");

    let _ = io::stdout().flush();

    io::stdin()
        .read_line(&mut input)
        .expect("Error! Please, try again.");

    let output: u8 = input.trim().parse().expect("Input not an integer");

    return output;
}
