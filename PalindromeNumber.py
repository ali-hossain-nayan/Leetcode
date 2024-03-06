class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x > 0 and x % 10 == 0):
            return False
        reverseNum = 0
        while x > reverseNum:
            reverseNum = reverseNum * 10 + x % 10 
            x = x // 10
        return x == reverseNum or x == reverseNum // 10
