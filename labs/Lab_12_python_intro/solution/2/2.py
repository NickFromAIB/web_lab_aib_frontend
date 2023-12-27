import heapq


def median_search(n, arr):
    max_heap = []
    min_heap = []
    result = 0

    for index in range(n):
        heapq.heappush(max_heap, -arr[index])
        heapq.heappush(min_heap, -heapq.heappop(max_heap))

        if len(min_heap) > len(max_heap):
            heapq.heappush(max_heap, -heapq.heappop(min_heap))

        result -= max_heap[0]

    return result


if __name__ == "__main__":
    n = int(input("Введите кол-во чисел: "))
    X = [int(input(f"Введите число {i + 1}: ")) for i in range(n)]

    print("Сумма медианных значений:", median_search(n, X))
