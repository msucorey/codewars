def order_weight(strng)
    # your code
    # strng.split(" ").map { |x| x.to_i }.sort_by { |x| x.to_s.split("").map { |x| x.to_i }.inject(:+) } ah this doesn't account for ties
    array = strng.split(" ").map { |x| x.to_i }.sort_by { |x| x.to_s.split("").map { |x| x.to_i }.inject(:+) }
    no_swaps_needed = false
    while !no_swaps_needed
      no_swaps_needed = true
      1.upto(array.length - 1) do |i|
        if array[i - 1].to_s.split("").map { |x| x.to_i }.inject(:+) == array[i].to_s.split("").map { |x| x.to_i }.inject(:+)
          if array[i - 1].to_s > array[i].to_s
            array[i - 1] , array[i] = array[i] , array[i - 1]
            no_swaps_needed = false
          end
        end
      end
    end
    array.join(" ")
end

puts order_weight("27 9 27 9 27 9 27 9 27 9 27 9 27 9 27 9 27 9 27 9")
puts order_weight("2000 10003 1234000 44444444 9999 11 11 22 123")
puts order_weight("2000 10003 1234000 44444444 9999 27 9 27 9 27 9 27 9 11 11 22 123")
