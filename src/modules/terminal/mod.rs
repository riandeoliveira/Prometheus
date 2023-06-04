use std::process::Command;

pub fn clear() -> () {
    Command::new("clear").status().unwrap();
}
