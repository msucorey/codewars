=begin
Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.
=end

def is_palindrome?(string)
  num_chars = string.length
  (0..(num_chars / 2)).each do |i|
    return false if !(string[i] == string[num_chars - 1 - i])
  end
  true
end

def longest_palindrome s
  offset = 0
  length = s.length
  while (length - offset) > 0
    for i in (0..offset)
      if is_palindrome?(s[i..(i + length - offset)])
        return s[i..(i + length - offset)].length
      end
    end
    offset += 1
  end
end

puts longest_palindrome("a")#, 1)
puts longest_palindrome("aa")#, 2)
puts longest_palindrome("baa")#, 2)
puts longest_palindrome("aab")#, 2)
puts longest_palindrome("baabcd")#, 4)
puts longest_palindrome("baablkj12345432133d")#, 9)
