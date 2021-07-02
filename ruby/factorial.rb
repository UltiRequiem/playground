# frozen_string_literal: true

def factorial(n)
  return nil if n.negative?

  value = 1
  while n.positive?
    value *= n
    n -= 1
  end
  value
end

puts factorial(5)
