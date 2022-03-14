test('lz-button', () => {
    const TAG = '<lz-button></lz-button>';
    document.body.innerHTML = `${TAG}`
    expect(document.body.innerHTML).toContain('It works!')
});
