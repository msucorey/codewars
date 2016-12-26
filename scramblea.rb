def scramble(s1,s2)
  s2.chars.uniq.each do |char|
    return false if s2.count(char) > s1.count(char)
  end
  true
end

puts scramble('rkqodlw','world')
puts scramble('cedewaraaossoqqyt','codewars')
puts scramble('katas','steak')
puts scramble('scriptjava','javascript')
puts scramble('scriptingjava','javascript')
