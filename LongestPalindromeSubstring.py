class Solution:
    def longestPalindrome(self, s: str) -> str:
        def check(s, l, r, bestLeft, bestRight):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            l += 1
            r -= 1
            if r - l + 1 > bestRight - bestLeft + 1:
                bestLeft = l
                bestRight = r
            return bestLeft, bestRight

        bestLeft = 0
        bestRight = 0
        for i in range(len(s)):
            bestLeft, bestRight = check(s, i, i, bestLeft, bestRight)
            bestLeft, bestRight = check(s, i, i + 1, bestLeft, bestRight)

        return s[bestLeft:bestRight + 1]


