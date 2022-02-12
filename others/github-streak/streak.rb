# frozen_string_literal: true

def get_streak(days: Number)
  days.times { |i| system("git commit --allow-empty --date='#{i} day ago' -m 'Nothing to view here'") }
end

get_streak(500)
