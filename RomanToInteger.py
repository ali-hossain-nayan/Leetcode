class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman_string = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
        
        result = 0
        
        for i in range(len(s)):
            if i+1<len(s) and roman_string[s[i]]<roman_string[s[i+1]]:
                result -=roman_string[s[i]]
                
            else:
                result += roman_string[s[i]]
        return result   