from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        for j in nums:
            if j != val:
                nums[i] = j
                i += 1
        return i
