use std::process::Command;

#[derive(Debug)]
pub struct Terminal {}

impl Terminal {
    pub fn clear() -> () {
        Command::new("clear").status().unwrap();
    }

    pub fn mkdir() -> () {
        Command::new("mkdir").args(["teste"]).status().unwrap();
    }
}
