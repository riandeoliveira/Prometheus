use std::process::Command;

#[derive(Debug)]
pub struct Terminal {}

impl Terminal {
    pub fn clear() -> () {
        Command::new("clear").status().unwrap();
    }
}
