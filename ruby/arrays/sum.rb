# frozen_string_literal: true

NUMBERS = [1, 2, 3].freeze

def sum_array(arr)
  arr.sum
end

def sum_array_two(arr)
  arr.reduce { |acum, num| acum + num }
end

puts sum_array_two(NUMBERS)
