def valid_parentheses(string)
  #your code here
  open_parens = 0
  string.chars.each do |char|
    open_parens += 1 if char == "("
    open_parens -= 1 if char == ")"
    return false if open_parens < 0
  end
  open_parens == 0
end

puts valid_parentheses("  (")
puts valid_parentheses(")test")
puts valid_parentheses("")
puts valid_parentheses("hi())(")
puts valid_parentheses("hi(hi)()")
