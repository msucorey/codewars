$full_grid =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

def pairs_of_blocking_letters(letter)
  case letter
  when 'A'
    return [['B', 'C'], ['E', 'I'], ['D', 'G']]
  when 'B'
    return [['E', 'H']]
  when 'C'
    return [['B', 'A'], ['E', 'G'], ['F', 'I']]
  when 'D'
    return [['E', 'F']]
  when 'E'
    return []
  when 'F'
    return [['E', 'D']]
  when 'G'
    return [['D', 'A'], ['E', 'C'], ['H', 'I']]
  when 'H'
    return [['E', 'B']]
  when 'I'
    return [['H', 'G'], ['E', 'A'], ['F', 'C']]
  else
    return letter
  end
end

def other_letters(letter)
  this_and_blockers = pairs_of_blocking_letters(letter).flatten + [letter]
  $full_grid.reject {|x| this_and_blockers.include?(x)}
end

def count_patterns_from(first_dot, length, grid = $full_grid)
  return 0 if !length.between?(1, 9)
  return 1 if length == 1

  rest_of_grid = grid.reject {|x| x == first_dot}
  options = 0

  pairs_of_blocking_letters(first_dot).each do |pair|
    first_letter, blocked_letter = pair
    if rest_of_grid.include?(first_letter)
      options += count_patterns_from(first_letter, length - 1, rest_of_grid)
    elsif rest_of_grid.include?(blocked_letter)
      options += count_patterns_from(blocked_letter, length - 1, rest_of_grid)
    end
  end

  other_letters(first_dot).each do |letter|
    if rest_of_grid.include?(letter)
      options += count_patterns_from(letter, length - 1, rest_of_grid)
    end
  end

  options
end

puts count_patterns_from('C', 1)
puts count_patterns_from('C', 2)
puts count_patterns_from('C', 3)
puts count_patterns_from('C', 4)