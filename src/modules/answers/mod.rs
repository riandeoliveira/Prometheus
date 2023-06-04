use crate::modules::choices::Choice;

#[derive(Debug)]
pub struct Answers {
    pub list: Vec<Choice>,
}

impl Answers {
    pub fn init() -> Self {
        let list: Vec<Choice> = vec![];

        Self { list }
    }

    pub fn add(&mut self, choice: Choice) -> () {
        self.list.push(choice);
    }
}
