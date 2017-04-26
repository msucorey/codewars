def calc(last, base)
  found = false
  number = last
  next_power = base * base
  until found
    num_str = number.to_s(base)
    first_digit = num_str[0].to_i(base)
    last_digit = num_str[-1].to_i(base)
    next if last_digit == 0 || last_digit == 1
    shifted_number = (last_digit.to_s + num_str[0...-1]).to_i(base)
    product = last_digit * number
    if product == shifted_number
      found = true
      return number.to_s(base)
    end
    if first_digit > 1
      number = next_power + last
      next_power *= base
    else
      number += base * last
    end
  end
  nil
end

calc(2,8)
# "102564"
calc(4,16)
# "104"
calc(4,10)
