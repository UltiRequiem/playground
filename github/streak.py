from os import system


def get_streak(days: int) -> None:
    for commit in range(days):
        system(
            f"git commit --allow-empty --date='{commit} day ago' -m 'Nothing to view here'"
        )


if __name__ == "__main__":
    get_streak(500)
