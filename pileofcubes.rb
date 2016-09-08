def find_nb(m)
    # your code
    n = 0
    still_room = true
    this_cube_side = 0
    room_left = m
    while still_room
      this_cube_side +=1
      room_left -= this_cube_side**3
      still_room = room_left > 0
    end
    room_left == 0 ? this_cube_side : -1
end

puts find_nb(4183059834009)
puts find_nb(24723578342962)
puts find_nb(135440716410000)
puts find_nb(40539911473216)
