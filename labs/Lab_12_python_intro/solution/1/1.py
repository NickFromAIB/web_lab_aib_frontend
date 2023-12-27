def HorseOleg(N, M):
    dp = [[0] * M for _ in range(N)]
    dp[0][0] = 1
    for i in range(N):
        for j in range(M):
            if i - 2 >= 0:
                dp[i][j] += dp[i - 2][j - 1] if j - 1 >= 0 else 0
            if j - 2 >= 0:
                dp[i][j] += dp[i - 1][j - 2] if i - 1 >= 0 else 0
    return dp[N - 1][M - 1]


if __name__ == "__main__":
    print("РЕЗУЛЬТАТ:", HorseOleg(int(input("N: ")), int(input("M: "))))
