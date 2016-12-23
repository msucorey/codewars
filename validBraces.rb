=begin
All input strings will be nonempty, and will only consist of open parentheses
'(' , closed parentheses ')', open brackets '[', closed brackets ']', open
curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces
are matched with the correct brace.
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and
'[({})](]' would be considered invalid.

Examples:
validBraces( "(){}[]" ) => returns true
validBraces( "(}" ) => returns false
validBraces( "[(])" ) => returns false
validBraces( "([{}])" ) => returns true
=end

def validBraces(braces)
  parens_count = 0
  bracket_count = 0
  curly_count = 0
  next_to_close = []
  braces.chars.each do |char|
    case char
      when "("
        parens_count += 1
        next_to_close << "p"
      when ")"
        if (parens_count == 0) || (next_to_close.pop != "p")
          return false
        else
          parens_count -= 1
        end
      when "["
        bracket_count += 1
        next_to_close << "b"
      when "]"
        if (bracket_count == 0) || (next_to_close.pop != "b")
          return false
        else
          bracket_count -= 1
        end
      when "{"
        curly_count += 1
        next_to_close << "c"
      when "}"
        if (curly_count == 0) || (next_to_close.pop != "c")
          return false
        else
          curly_count -= 1
        end
    end
  end
  parens_count + bracket_count + curly_count == 0
end

puts validBraces( "()" )#, true)
puts validBraces( "[(])" )#, false)
