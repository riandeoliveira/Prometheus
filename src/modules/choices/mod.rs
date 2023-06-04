use std::option::Option;

#[derive(Debug, Clone)]
pub struct Choice {
    pub value: u8,
    pub name: &'static str,
    pub question_id: &'static str,
    pub next_question_id: &'static str,
}

impl Choice {
    fn new(
        value: u8,
        name: &'static str,
        question_id: &'static str,
        next_question_id: &'static str,
    ) -> Self {
        Self {
            value,
            name,
            question_id,
            next_question_id,
        }
    }
}

#[derive(Debug)]
pub struct Choices {
    pub list: Vec<Choice>,
}

impl Choices {
    pub fn init() -> Self {
        let list: Vec<Choice> = vec![
            Choice::new(1, "Angular", "150736d1", "a4b55923"),
            Choice::new(1, "BackEnd", "7d5b561e", "8b6b1ba2"),
            Choice::new(1, "ContextAPI", "2bb6f34c", "7a278a40"),
            Choice::new(1, "CSS Modules", "d7cd603c", "2bb6f34c"),
            Choice::new(1, "Firebase", "1a9bccfa", "7a278a40"),
            Choice::new(1, "Laravel", "8b6b1ba2", "8d49a014"),
            Choice::new(1, "Sim", "3a71c955", "150736d1"),
            Choice::new(2, "FrontEnd", "7d5b561e", "150736d1"),
            Choice::new(2, "Não", "3a71c955", "150736d1"),
            Choice::new(2, "NextJS API", "1a9bccfa", "7a278a40"),
            Choice::new(2, "React + NextJS", "150736d1", "d7cd603c"),
            Choice::new(2, "Redux Toolkit", "2bb6f34c", "7a278a40"),
            Choice::new(2, "SASS Modules", "d7cd603c", "2bb6f34c"),
            Choice::new(3, "FullStack", "7d5b561e", "3a71c955"),
            Choice::new(3, "Styled Components", "d7cd603c", "2bb6f34c"),
            Choice::new(3, "Svelte", "150736d1", "a4b55923"),
            Choice::new(3, "Zustand", "2bb6f34c", "a4b55923"),
            Choice::new(4, "TailwindCSS", "d7cd603c", "2bb6f34c"),
            Choice::new(4, "Vue", "150736d1", "a4b55923"),
        ];

        Self { list }
    }

    pub fn find_all_by_question_id(&self, question_id: &'static str) -> Option<Vec<&Choice>> {
        let mut choices: Vec<&Choice> = vec![];

        for choice in &self.list {
            if choice.question_id == question_id {
                choices.push(choice);
            }
        }

        return Some(choices);
    }

    pub fn find_unique(&self, value: u8, question_id: &'static str) -> Option<&Choice> {
        for choice in &self.list {
            if choice.value == value && choice.question_id == question_id {
                return Some(choice);
            }
        }

        None
    }
}
