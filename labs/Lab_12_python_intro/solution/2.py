n = int(input())
X = [int(input()) for _ in range(n)]

medians = []

for i in range(n):
    sorted_X = sorted(X[:i+1])
    median_index = (i + 1) // 2

    if (i + 1) % 2 == 1:
        median = sorted_X[median_index]
    else:
        median = sorted_X[median_index - 1]

    medians.append(median)

print(sum(medians))