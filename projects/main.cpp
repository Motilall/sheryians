#include <iostream>
#include <chrono>

using namespace std;

int main() {
    auto start = chrono::high_resolution_clock::now();

    for (int i = 1; i < 10000000; i++) {
        cout << endl;
    }

    auto end = chrono::high_resolution_clock::now();
    auto duration = chrono::duration_cast<chrono::milliseconds>(end - start);

    cout << "Completed the loop in " << duration.count() << " milliseconds." << endl;

    return 0;
}