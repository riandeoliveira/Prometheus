use std::option::Option;

#[derive(Debug)]
pub struct Question {
    pub id: &'static str,
    pub label: &'static str,
}

impl Question {
    fn new(id: &'static str, label: &'static str) -> Self {
        Self { id, label }
    }
}

#[derive(Debug)]
pub struct Questions {
    pub list: Vec<Question>,
}

impl Questions {
    pub fn init() -> Self {
        let list: Vec<Question> = vec![
            Question::new("7d5b561e", "Que tipo de aplicação você irá desenvolver?"),
            Question::new(
                "3a71c955",
                "Você deseja utilizar o FrontEnd e BackEnd na mesma pasta?",
            ),
            Question::new(
                "150736d1",
                "Qual biblioteca/framework você deseja utilizar no FrontEnd?",
            ),
            Question::new(
                "8b6b1ba2",
                "Qual framework você deseja utilizar no BackEnd?",
            ),
            Question::new(
                "d7cd603c",
                "Qual forma de estilização você deseja utilizar?",
            ),
            Question::new(
                "2bb6f34c",
                "Qual gerenciador de estado você deseja utilizar?",
            ),
            Question::new("1a9bccfa", "Qual solução de BackEnd você prefere?"),
        ];

        Self { list }
    }

    pub fn find_by_id(&self, id: &'static str) -> Option<&Question> {
        for question in &self.list {
            if question.id == id {
                return Some(question);
            }
        }

        None
    }
}
