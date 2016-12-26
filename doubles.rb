def doubles(maxk, maxn)
  sum = 0.0
  1.upto(maxk) do |k|
    1.upto(maxn) do |n|
      sum += 1.to_f / (k * (n + 1)**(2 * k))
    end
  end
  sum
end

puts doubles(1, 10)#, 0.5580321939764581)
puts doubles(10, 1000)#, 0.6921486500921933)
puts doubles(10, 10000)#, 0.6930471674194457)
puts doubles(20, 10000)#, 0.6930471955575918)
