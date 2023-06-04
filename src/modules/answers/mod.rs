#[derive(Default)]
pub struct Answer {
    pub same_directory: bool,
}

impl Answer {
    pub fn new() -> Self {
        Default::default()
    }

    pub fn get(self) -> () {
        println!("{}", self.same_directory);
    }

    pub fn set(self, same_directory: bool) -> () {
        Self { same_directory };
    }
}
