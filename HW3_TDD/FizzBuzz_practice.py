import unittest

def FizzBuzz(number):
    output = ''
    if number % 3 == 0:
        output += 'Fizz'
    if number % 5 == 0:
        output += 'Buzz'
    return output if output!='' else str(number)

## This is unittest part
class FizzBuzz_Test(unittest.TestCase):
    def test1(self):
        result = FizzBuzz(1)
        self.assertEqual(result,'1')

    def test2(self):
        result = FizzBuzz(3)
        self.assertEqual(result,'Fizz')

    def test3(self):
        result = FizzBuzz(5)
        self.assertEqual(result,'Buzz')

    def test4(self):
        result = FizzBuzz(15)
        self.assertEqual(result,'FizzBuzz')

unittest.main()
