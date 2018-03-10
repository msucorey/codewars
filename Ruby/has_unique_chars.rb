def unique_chars?(str)
  prev_chars = []
  str.chars.each do |char|
    return false if prev_chars.include?(char)
    prev_chars << char
  end
  return true
end

puts unique_chars?('  nAa') # ,false)
puts unique_chars?('abcdef') # ,true)
puts unique_chars?('++-') # ,false)