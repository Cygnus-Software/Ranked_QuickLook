from utils import list_dif

EXCLUDE_PLAYERS = ["S H I R O 1596", "ElSempaí"]


def get_players(players=5):
    raw_lines = [input() for line in range(players)]
    return list_dif([line[:-18] for line in raw_lines], EXCLUDE_PLAYERS)


def main():
    print("Players:", get_players())


if __name__ == "__main__":
    main()
