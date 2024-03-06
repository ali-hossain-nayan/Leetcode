class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        sort = sorted(nums1 + nums2)
        if len(sort)%2 == 1:
            return sort[(len(sort)/2)]
        else:
            return (sort[(len(sort)/2)] + sort[(len(sort)/2) - 1] )/2.0