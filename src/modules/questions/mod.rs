use std::option::Option as StdOption;
use uuid::{uuid, Uuid};

#[derive(Debug)]
pub struct Option {
    pub id: u8,
    pub name: &'static str,
    pub next_question_id: Uuid,
}

#[derive(Debug)]
pub struct Question {
    pub id: Uuid,
    pub label: &'static str,
    pub options: Vec<Option>,
}

#[derive(Debug)]
pub struct QuestionList {
    list: Vec<Question>,
}

impl QuestionList {
    pub fn init() -> Self {
        let list: Vec<Question> = vec![
            Question {
                id: uuid!("7d5b561e-3b79-4009-a289-e92de964e35b"),
                label: "Que tipo de aplicação você irá desenvolver?",
                options: vec![
                    Option {
                        id: 1,
                        name: "BackEnd",
                        next_question_id: uuid!("8b6b1ba2-1be1-4276-b478-b4289c1047ed"),
                    },
                    Option {
                        id: 2,
                        name: "FrontEnd",
                        next_question_id: uuid!("150736d1-dce4-4667-95e4-7a901e699f11"),
                    },
                    Option {
                        id: 3,
                        name: "FullStack",
                        next_question_id: uuid!("3a71c955-d924-46ca-92b5-16f1f2f80cb1"),
                    },
                ],
            },
            Question {
                id: uuid!("3a71c955-d924-46ca-92b5-16f1f2f80cb1"),
                label: "Você deseja utilizar o FrontEnd e BackEnd em pastas separadas?",
                options: vec![
                    Option {
                        id: 1,
                        name: "Sim",
                        next_question_id: uuid!("150736d1-dce4-4667-95e4-7a901e699f11"),
                    },
                    Option {
                        id: 2,
                        name: "Não",
                        next_question_id: uuid!("150736d1-dce4-4667-95e4-7a901e699f11"),
                    },
                ],
            },
            Question {
                id: uuid!("150736d1-dce4-4667-95e4-7a901e699f11"),
                label: "Qual biblioteca/framework você deseja utilizar no FrontEnd?",
                options: vec![
                    Option {
                        id: 1,
                        name: "Angular",
                        next_question_id: uuid!("a4b55923-d4b1-47e7-a6ba-05cbd7433416"),
                    },
                    Option {
                        id: 2,
                        name: "React + NextJS",
                        next_question_id: uuid!("d7cd603c-0f15-4856-bf91-e594101ac2d9"),
                    },
                    Option {
                        id: 3,
                        name: "Svelte",
                        next_question_id: uuid!("a4b55923-d4b1-47e7-a6ba-05cbd7433416"),
                    },
                    Option {
                        id: 4,
                        name: "Vue",
                        next_question_id: uuid!("a4b55923-d4b1-47e7-a6ba-05cbd7433416"),
                    },
                ],
            },
            Question {
                id: uuid!("8b6b1ba2-1be1-4276-b478-b4289c1047ed"),
                label: "Qual framework você deseja utilizar no BackEnd?",
                options: vec![Option {
                    id: 1,
                    name: "Laravel",
                    next_question_id: uuid!("8d49a014-3833-4e9f-b97e-a29ed599083e"),
                }],
            },
            Question {
                id: uuid!("d7cd603c-0f15-4856-bf91-e594101ac2d9"),
                label: "Qual forma de estilização você deseja utilizar?",
                options: vec![
                    Option {
                        id: 1,
                        name: "CSS Modules",
                        next_question_id: uuid!("2bb6f34c-8052-4f52-8ea1-2f6b2978c743"),
                    },
                    Option {
                        id: 2,
                        name: "SASS Modules",
                        next_question_id: uuid!("2bb6f34c-8052-4f52-8ea1-2f6b2978c743"),
                    },
                    Option {
                        id: 3,
                        name: "Styled Components",
                        next_question_id: uuid!("2bb6f34c-8052-4f52-8ea1-2f6b2978c743"),
                    },
                    Option {
                        id: 4,
                        name: "TailwindCSS",
                        next_question_id: uuid!("2bb6f34c-8052-4f52-8ea1-2f6b2978c743"),
                    },
                ],
            },
            Question {
                id: uuid!("2bb6f34c-8052-4f52-8ea1-2f6b2978c743"),
                label: "Qual gerenciador de estado você deseja utilizar?",
                options: vec![
                    Option {
                        id: 1,
                        name: "Context API",
                        next_question_id: uuid!("7a278a40-534c-4ce4-abbd-237fc18e6e6c"),
                    },
                    Option {
                        id: 2,
                        name: "Redux Toolkit",
                        next_question_id: uuid!("7a278a40-534c-4ce4-abbd-237fc18e6e6c"),
                    },
                    Option {
                        id: 3,
                        name: "Zustand",
                        next_question_id: uuid!("7a278a40-534c-4ce4-abbd-237fc18e6e6c"),
                    },
                ],
            },
            Question {
                id: uuid!("1a9bccfa-c6a0-4c80-b05d-675ac505e2db"),
                label: "Qual solução de BackEnd você prefere?",
                options: vec![
                    Option {
                        id: 1,
                        name: "Firebase",
                        next_question_id: uuid!("7a278a40-534c-4ce4-abbd-237fc18e6e6c"),
                    },
                    Option {
                        id: 2,
                        name: "NextJS API",
                        next_question_id: uuid!("7a278a40-534c-4ce4-abbd-237fc18e6e6c"),
                    },
                ],
            },
        ];

        Self { list }
    }
}

pub fn find_all() -> Vec<Question> {
    let questions: QuestionList = QuestionList::init();

    return questions.list;
}

pub fn find_by_id(id: Uuid) -> StdOption<Question> {
    let questions = find_all();

    for question in questions {
        if (question.id == id) {
            return Some(question);
        }
    }

    None
}

pub fn find_option_by_id(question_id: Uuid, option_id: u8) -> StdOption<Option> {
    let question = find_by_id(question_id).unwrap();

    for option in question.options {
        if (option.id == option_id) {
            return Some(option);
        }
    }

    None
}
