def duplicate_encode(word)
  #your code here
  char_count = Hash.new(0)
  code = ""
  word.chars { |char| char_count[char.upcase] += 1 }
  word.chars.each do |char|
    char_count[char.upcase] > 1 ? code << ")" : code << "("
  end
  code
end

puts duplicate_encode("din")
puts duplicate_encode("recede")
puts duplicate_encode("Success")
puts duplicate_encode("(( @")
