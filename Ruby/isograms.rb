def is_isogram(string)
  #your code here
  appears_to_be_so_far = true
  letter_counts = Hash.new(0)
  string.split("").each do |letter|
    if letter_counts[letter.downcase] == 0
      letter_counts[letter.downcase] += 1
    else
      return false
    end
  end
  appears_to_be_so_far
end
