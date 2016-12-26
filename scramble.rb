def scramble(s1,s2)
  matched = Array.new(s1.length)
  s2.chars.each do |char2|
    this_char_not_found = true
    s1.chars.each_with_index do |char1, i|
      next if !this_char_not_found
      if (char1 == char2) && matched[i].nil?
        matched[i] = :matched
        this_char_not_found = false
      end
    end
    return false if this_char_not_found
  end
  return true
end

puts scramble('rkqodlw','world')
puts scramble('cedewaraaossoqqyt','codewars')
puts scramble('katas','steak')
puts scramble('scriptjava','javascript')
puts scramble('scriptingjava','javascript')
