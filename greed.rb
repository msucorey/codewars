#!/usr/bin/env ruby
puts "hello"

def score( dice )
  score1 = (dice.count(1) / 3) * 1_000 + (dice.count(1) % 3) * 100
  score2 = (dice.count(2) / 3) *   200
  score3 = (dice.count(3) / 3) *   300
  score4 = (dice.count(4) / 3) *   400
  score5 = (dice.count(5) / 3) *   500 + (dice.count(5) % 3) * 50
  score6 = (dice.count(6) / 3) *   600
  score1 + score2 + score3 + score4 + score5 + score6
end

puts score( [2, 3, 4, 6, 2] )
puts score( [2, 2, 2, 3, 3] )
puts score( [2, 4, 4, 5, 4] )
