# frozen_string_literal: true

def factorial(num)
  (1..num).reduce(1, :*)
end

puts factorial(5)
