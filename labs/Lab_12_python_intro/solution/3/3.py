filename = input("Введите имя файла: ")

with open(filename, 'r') as file:
    str = file.read()

char_count = {}
maxh = 0

for char in str:
    if char == ' ':
        continue
    char_count[char] = char_count.get(char, 0) + 1
    maxh = max(maxh, char_count[char])

unique_chars = sorted(char_count.keys())

for i in range(maxh, 0, -1):
    print(''.join('#' if char_count[tt] >= i else ' ' for tt in unique_chars))

print(''.join(unique_chars))