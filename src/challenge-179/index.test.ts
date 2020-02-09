import { encryptNum } from '.'

describe('encryptNum', () => {
  it('should take a phone number and hide last 6 digits', () => {
    expect(encryptNum('201-680-0202')).toBe('201-6XX-XXXX')
    expect(encryptNum('328 6587120')).toBe('328-6XX-XXXX')
    expect(encryptNum('211-458-7851')).toBe('211-4XX-XXXX')
    expect(encryptNum('212.420.0202')).toBe('212-4XX-XXXX')
    expect(encryptNum('212.420.00202')).toBe('Invalid phone number')
  })
})
