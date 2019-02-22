import unittest

def FizzBuzz(number):
    if number % 3 == 0:
        return 'Fizz'
    else:
        return str(number)

## This is unittest part
class FizzBuzz_Test(unittest.TestCase):
    def test1(self):
        result = FizzBuzz(1)
        self.assertEqual(result,'1')

    def test2(self):
        result = FizzBuzz(3)
        self.assertEqual(result,'Fizz')

unittest.main()
