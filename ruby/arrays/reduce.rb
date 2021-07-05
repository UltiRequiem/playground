# frozen_string_literal: true

NUMBERS = [1, 2, 3, 4].freeze

def sum_all(arr)
  arr.reduce { |sum, n| sum + n }
end

def multiply_all(arr)
  arr.reduce { |sum, n| sum * n }
end

puts sum_all(NUMBERS) # NUMBERS.sum

puts multiply_all(NUMBERS)
