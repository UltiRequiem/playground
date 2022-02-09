use ferris_says::say;
use std::io::{stdout, BufWriter};

fn main() {
    let stdout = stdout();
    let message = String::from("Hello Rust!");

    let mut writer = BufWriter::new(stdout.lock());
    say(message.as_bytes(), message.chars().count(), &mut writer).unwrap();
}