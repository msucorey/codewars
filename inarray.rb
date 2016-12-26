def in_array(array1, array2)
  result = []
  array2.each do | string |
    array1.each do | substring |
      result << substring if string.match(substring)
    end
  end
  result.uniq.sort
end


a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
puts in_array(a1, a2)
a1 = ["tarp", "mice", "bull"]
puts in_array(a1, a2)
